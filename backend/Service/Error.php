<?php

declare(strict_types=1);

namespace Tebe\Example\JsonRpcWebApp\Service;

use Laminas\Json\Server\Exception\RuntimeException;

/**
 * Error
 */
class Error
{

    /**
     * @throws \Exception
     */
    public function error(): void
    {
        throw new RuntimeException('An error occured');
    }

    /**
     * @return bool
     */
    public function success(): bool
    {
        return true;
    }
}
