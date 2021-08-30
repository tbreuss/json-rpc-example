<?php

declare(strict_types=1);

use Laminas\Json\Json;
use Tebe\Example\JsonRpcWebApp\Service;

error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('error_log', __DIR__ . '../runtime/log/error.log');
setlocale(LC_ALL, 'de_DE');

include_once '../vendor/autoload.php';

$server = new Laminas\Json\Server\Server();
$server->setClass(Service\Calculator::class, 'calculator');
$server->setClass(Service\Error::class, 'error');
$server->setClass(Service\Person::class, 'person');
$server->setClass(Service\Ping::class);

if ('GET' == $_SERVER['REQUEST_METHOD']) {
    // Indicate the URL endpoint, and the JSON-RPC version used:
    $server->setTarget('/json-rpc.php')
        ->setEnvelope(Laminas\Json\Server\Smd::ENV_JSONRPC_2);

    // Grab the SMD
    $smd = $server->getServiceMap();
    $smd->setId('http://localhost:9999/json-rpc.php');
    $smd->setDescription('A simple JSON-RPC example using Laminas JSON-RPC Server, OpenRPC Client JS, and Mithril.js');

    // Return the SMD to the client
    header('Content-Type: application/json');
    echo Json::encode($smd->toArray(), true, ['prettyPrint' => true]);
    #echo $smd;
    return;
}

$server->handle();
