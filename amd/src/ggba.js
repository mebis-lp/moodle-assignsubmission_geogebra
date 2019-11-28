/**
 * Javascript Controller to embed GGBApplet
 *
 * This class provides all the functionality for the new assign module.
 *
 * @package        assignsubmission_geogebra
 * @author         Christoph Stadlbauer <christoph.stadlbauer@geogebra.org>
 * @copyright  (c) International GeoGebra Institute 2018
 * @license        http://www.geogebra.org/license
 */
define(['jquery', '//www.geogebra.org/apps/deployggb.js', 'core/yui'], function($, GGBApplet) {
    /**
     * Created by Christoph on 20.10.18.
     */
    return {


        // init: function (params) {
        init: function() {
            window.GGBA = this;

            window.ggbAppletOnLoad = function() {
                $('#ggbApplet').on('keypress, keydown', window.GGBA.checkEnter);
                //document.querySelector('#ggbApplet').onkeydown = window.GGBA.checkEnter;
                if (typeof window.applet1 !== 'undefined' && typeof document.ggbApplet !== 'undefined' &&
                    window.GGBA.ggbparametersin.length) {
                    window.GGBA.ggbparametersin.val(JSON.stringify(window.applet1.getParameters()));
                    window.GGBA.ggbviewsin.val(JSON.stringify(window.applet1.getViews()));
                    window.GGBA.ggbcodebaseversionin.val(window.applet1.getHTML5CodebaseVersion());
                }
            };

            this.ggbparametersin = $('input[name="ggbparameters"]');
            this.ggbviewsin = $('input[name="ggbviews"]');
            this.ggbcodebaseversionin = $('input[name="ggbcodebaseversion"]');

            if ($('#applet_parameters')[0] !== undefined) {
                this.ggbDataset = $('#applet_parameters')[0].dataset;
                this.parameters = JSON.parse(this.ggbDataset.parameters);
                //this.views = this.ggbDataset.views;
                //window.applet1 = new GGBApplet(this.parameters, this.views, true);
                this.lang = this.ggbDataset.lang;
                this.parameters.language = this.lang;
                window.applet1 = new GGBApplet(this.parameters, true);
                window.applet1.setHTML5Codebase("https://www.geogebra.org/apps/5.0.410.0/web3d");


                // parameters = params;
                //window.applet1 = new GGBApplet(this.parameters);
                this.ggbloaded = false;
                this.ggbdisplaytoggle = $("[class*=expand_assignsubmission_geogebra]");

                if ((typeof this.ggbdisplaytoggle != 'undefined') && this.ggbdisplaytoggle.length == 1) {
                    this.ggbdisplaytoggle.on('click', function() {
                        if (!window.GGBA.ggbloaded) {
                            window.applet1.inject("applet_container1", "preferHTML5");
                            window.GGBA.ggbloaded = true;
                        }
                    });
                } else {
                    window.applet1.inject("applet_container1", "preferHTML5");
                    this.ggbloaded = true;
                }
            }
            $('#mform1').on('submit', function() {
                if (typeof window.applet1 !== 'undefined' && typeof document.ggbApplet !== 'undefined' &&
                    window.GGBA.ggbparametersin.length) {
                    window.GGBA.ggbparametersin.val(JSON.stringify(window.applet1.getParameters()));
                    window.GGBA.parameters.ggbBase64 = document.ggbApplet.getBase64();
                    window.GGBA.ggbparametersin.val(JSON.stringify(window.GGBA.parameters));
                    window.GGBA.ggbviewsin.val(JSON.stringify(window.applet1.getViews()));
                    window.GGBA.ggbcodebaseversionin.val(window.applet1.getHTML5CodebaseVersion());
                }
            });
            $('#applet_container1').on('mouseleave', function() {
                if (typeof window.applet1 !== 'undefined' && typeof document.ggbApplet !== 'undefined' &&
                    window.GGBA.ggbparametersin.length) {
                    window.GGBA.ggbparametersin.val(JSON.stringify(window.applet1.getParameters()));
                    window.GGBA.parameters.ggbBase64 = document.ggbApplet.getBase64();
                    if (JSON.stringify(window.GGBA.parameters) != window.GGBA.ggbparametersin.val()) {
                        M.core_formchangechecker.set_form_changed();
                    }
                    window.GGBA.ggbparametersin.val(JSON.stringify(window.GGBA.parameters));
                    window.GGBA.ggbviewsin.val(JSON.stringify(window.applet1.getViews()));
                    window.GGBA.ggbcodebaseversionin.val(window.applet1.getHTML5CodebaseVersion());
                }
            });
        },

        checkEnter: function(e) {
            e = e || event;
            var txtArea = /textarea/i.test((e.target || e.srcElement).tagName);
            return txtArea || (e.keyCode || e.which || e.charCode || 0) !== 13;
        }
    };

});
