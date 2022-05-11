/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// $FlowFixMe

var getPluginConfig = function getPluginConfig(actionItemConfig) {
    return actionItemConfig.value;
  }; // $FlowFixMe
  
  
  exports.getPluginConfig = getPluginConfig;
  
  var getPluginDuration = function getPluginDuration(element, actionItem) {
    if (actionItem.config.duration !== 'auto') {
      return null;
    }
  
    var duration = parseFloat(element.getAttribute('data-duration'));
  
    if (duration > 0) {
      return duration * 1000;
    }
  
    return parseFloat(element.getAttribute('data-default-duration')) * 1000;
  }; // $FlowFixMe
  
  
  exports.getPluginDuration = getPluginDuration;
  
  var getPluginOrigin = function getPluginOrigin(refState) {
    return refState || {
      value: 0
    };
  }; // $FlowFixMe
  
  
  exports.getPluginOrigin = getPluginOrigin;
  
  var getPluginDestination = function getPluginDestination(actionItemConfig) {
    return {
      value: actionItemConfig.value
    };
  }; // $FlowFixMe
  
  
  exports.getPluginDestination = getPluginDestination;
  
  var createPluginInstance = function createPluginInstance(element) {
    var instance = window.Webflow.require('lottie').createInstance(element);
  
    instance.stop();
    instance.setSubframe(true);
    return instance;
  }; // $FlowFixMe
  
  
  exports.createPluginInstance = createPluginInstance;
  
  var renderPlugin = function renderPlugin(pluginInstance, refState, actionItem) {
    if (!pluginInstance) {
      return;
    }
  
    var percent = refState[actionItem.actionTypeId].value / 100;
    pluginInstance.goToFrame(pluginInstance.frames * percent);
  }; // $FlowFixMe

// Header animation

function configure(data) {
    var config = {};
    var old = data.config || {}; // Set config options from data attributes

    var animation = config.animation = data.el.attr('data-animation') || 'default';
    config.animOver = /^over/.test(animation);
    config.animDirect = /left$/.test(animation) ? -1 : 1; // Re-open menu if the animation type changed

    if (old.animation !== animation) {
      data.open && _.defer(reopen, data);
    }

    config.easing = data.el.attr('data-easing') || 'ease';
    config.easing2 = data.el.attr('data-easing2') || 'ease';
    var duration = data.el.attr('data-duration');
    config.duration = duration != null ? Number(duration) : 400;
    config.docHeight = data.el.attr('data-doc-height'); // Store config in data

    data.config = config;
  }