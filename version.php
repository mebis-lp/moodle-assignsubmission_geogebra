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

$plugin->version = 2019112700;
$plugin->requires = 2018051702;
$plugin->dependencies = array(
        'qtype_geogebra' => 2019112700,
);

$plugin->component = 'assignsubmission_geogebra';

$plugin->maturity = MATURITY_BETA;

$plugin->release = '1.9.1';