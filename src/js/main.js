import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';
import 'select2/dist/js/select2.min.js';
import '../../node_modules/masonry-layout/dist/masonry.pkgd.min';
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min';

import { App } from './parts/app.js'
import { Plugins } from './parts/plugins.js'
import { Parts } from './parts/parts.js'
import { Truncate } from './parts/truncate.js';
import { Accordion } from './parts/accordion.js';
import { Privacy } from './parts/privacy.js';
import { Header } from './parts/header.js';


// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {

  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();

  window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
  window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
  window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');

  //Functions List Below

  window.app = new App();
  window.app.init();

  window.plugins = new Plugins();
  window.plugins.init();

  window.parts = new Parts();
  window.parts.init();

  window.truncate = new Truncate();
  window.truncate.init();

  window.accordion = new Accordion();
  window.accordion.init();

  window.privacy = new Privacy();
  window.privacy.init();

  window.header = new Header();
  window.header.init();
});

// ===========================================================================
