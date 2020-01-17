function reset() {
  document.getElementById("add_message").innerHTML = "";
}

function newAlert() {
  document.getElementById("add_message").innerHTML =
    '<div role="alert" aria-live="polite" class="ds-c-alert ds-u-animate-fade--in ds-u-animate-speed--slow"><div class="ds-c-alert__body"><h3 class="ds-c-alert__heading">Informative status</h3><p class="ds-c-alert__text">Lorem ipsum dolor sit <a href="javascript:void(0);">link text</a>, consectetur adipiscing elit, sed do eiusmod.</p></div></div>';
}

function newButton() {
  document.getElementById("add_message").innerHTML =
    '<button aria-live="polite" type="button" class="ds-c-button ds-c-button--danger ds-u-animate-fade--in ds-u-animate-speed--fast">Danger mouse</button>';
}

function newModal() {
  document.getElementById("add_message").innerHTML =
    ' <div class="ds-c-dialog-wrap ds-u-animate-fade--in ds-u-animate-speed--fast" aria-labelledby="dialog-title" role="dialog"><div class="ds-c-dialog ds-u-animate-fade--in ds-u-animate-speed--slow" role="document"><header class="ds-c-dialog__header" role="banner"><h1 class="ds-h2" id="dialog-title">Dialog title</h1><button onclick="reset()" class="ds-c-button ds-c-button--transparent ds-c-dialog__close" aria-label="Close modal dialog">Close</button></header><main role="main"><p class="ds-text"><strong>Dialog body text. </strong>We the People of the United States, in Order to form a more perfect Union</p></main><aside class="ds-c-dialog__actions" role="complementary"><button class="ds-c-button ds-c-button--danger">Dialog action</button><button onclick="reset()" class="ds-c-button ds-c-button--transparent">Cancel</button></aside></div></div>';
}
