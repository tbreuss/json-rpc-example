<?php

declare(strict_types=1);

namespace Tebe\Example\JsonRpcWebApp;

/**
 * Ping
 */
class Ping
{
    /**
     * Sends message back
     *
     * @return string
     */
    public function ping(): string
    {
        return 'pong';
    }

}
