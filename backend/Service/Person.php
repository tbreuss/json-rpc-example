<?php

declare(strict_types=1);

namespace Tebe\Example\JsonRpcWebApp\Service;

class Person
{
    public function getAll(): array
    {
        $filename = __DIR__ . '/../../data/persons.json';
        $content = file_get_contents($filename);
        return json_decode($content, true);
    }

    public function getOne(): array
    {
    }
}
