<?php

declare(strict_types=1);

namespace Tebe\Example\JsonRpcWebApp\Service;

/**
 * Calculator - sample class to expose via JSON-RPC
 */
class Calculator
{
    /**
     * Return sum of two variables
     *
     * @param  int|float $x
     * @param  int|float $y
     * @return CalculatorPayload
     */
    public function add($x, $y): CalculatorPayload
    {
        $errors = $this->validateNumbers($x, $y);
        if (count($errors) > 0) {
            return new CalculatorPayload(0, $errors);
        }
        try {
            $result = $x + $y;
            return new CalculatorPayload($result);
        } catch (\Exception $e) {
            return new CalculatorPayload(0, [$e->getMessage()]);
        }
    }

    /**
     * Return difference of two variables
     *
     * @param  int|float $x
     * @param  int|float $y
     * @return CalculatorPayload
     */
    public function subtract($x, $y): CalculatorPayload
    {
        $errors = $this->validateNumbers($x, $y);
        if (count($errors) > 0) {
            return new CalculatorPayload(0, $errors);
        }
        try {
            $result = $x - $y;
            return new CalculatorPayload($result);
        } catch (\Exception $e) {
            return new CalculatorPayload(0, [$e->getMessage()]);
        }
    }

    /**
     * Return product of two variables
     *
     * @param  int|float $x
     * @param  int|float $y
     * @return CalculatorPayload
     */
    public function multiply($x, $y): CalculatorPayload
    {
        $errors = $this->validateNumbers($x, $y);
        if (count($errors) > 0) {
            return new CalculatorPayload(0, $errors);
        }
        try {
            $result = $x * $y;
            return new CalculatorPayload($result);
        } catch (\Exception $e) {
            return new CalculatorPayload(0, [$e->getMessage()]);
        }
    }

    /**
     * Return the division of two variables
     *
     * @param  int|float $x
     * @param  int|float $y
     * @return CalculatorPayload
     */
    public function divide($x, $y): CalculatorPayload
    {
        $errors = $this->validateNumbers($x, $y);
        if (count($errors) > 0) {
            return new CalculatorPayload(0, $errors);
        }
        if ($y == 0.0) { // we want equal operator here
            return new CalculatorPayload(0, ['Division by zero']);
        }
        try {
            $result = $x / $y;
            return new CalculatorPayload($result);
        } catch (\Exception $e) {
            return new CalculatorPayload(0, [$e->getMessage()]);
        }
    }

    /**
     * @param int|float $x
     * @param int|float $y
     * @return array
     */
    private function validateNumbers($x, $y): array
    {
        $errors = [];
        if (!is_numeric($x)) {
            $errors[] = 'First number is no integer';
        }
        if (!is_numeric($y)) {
            $errors[] = 'Second number is no integer';
        }
        return $errors;
    }

}
