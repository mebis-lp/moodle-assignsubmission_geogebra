<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

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