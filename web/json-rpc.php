<?php

use Tebe\Example\JsonRpcWebApp\Calculator;
use Tebe\Example\JsonRpcWebApp\Ping;

error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('error_log', __DIR__ . '../runtime/log/error.log');
setlocale(LC_ALL, 'de_DE');

include_once '../vendor/autoload.php';

$server = new Laminas\Json\Server\Server();
$server->setClass(Calculator::class, 'calculator');
$server->setClass(Ping::class);

if ('GET' == $_SERVER['REQUEST_METHOD']) {
    // Indicate the URL endpoint, and the JSON-RPC version used:
    $server->setTarget('/json-rpc.php')
        ->setEnvelope(Laminas\Json\Server\Smd::ENV_JSONRPC_2);

    // Grab the SMD
    $smd = $server->getServiceMap();

    // Return the SMD to the client
    header('Content-Type: application/json');
    echo $smd;
    return;
}

$server->handle();
