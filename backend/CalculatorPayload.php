<?php

declare(strict_types=1);

namespace Tebe\Example\JsonRpcWebApp;

class CalculatorPayload
{
    public $result = 0;
    public $errors = [];

    /**
     * @param int|float $result
     * @param array $errors
     */
    public function __construct($result, array $errors = [])
    {
        $this->result = $result;
        $this->errors = $errors;
    }

}
