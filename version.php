<?php

/**
 * This file contains the version information for the geogebra submission plugin
 *
 * @package        assignsubmission_geogebra
 * @author         Christoph Stadlbauer <christoph.stadlbauer@geogebra.org>
 * @copyright  (c) International GeoGebra Institute 2014
 * @license        http://www.geogebra.org/license
 */

defined('MOODLE_INTERNAL') || die();

$plugin->version = 2014081905;
$plugin->requires = 2014051200;
$plugin->dependencies = array(
        'qtype_geogebra' => 2014081900,
);

$plugin->component = 'assignsubmission_geogebra';

$plugin->maturity = MATURITY_RC;

$plugin->release = '0.9.5';