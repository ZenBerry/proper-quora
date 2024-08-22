function clickElements() {
  console.log('Attempting to find and click buttons...');

  const button1 = document.querySelector("#mainContent > div:nth-child(2) > div > div.q-inlineFlex.qu-alignItems--flex-end.DesktopPopoverMenu___StyledInlineFlex-sc-47js9m-0.hfwRBf > div > div > button > div > div > div");

  if (button1) {
    console.log('Button1 found:', button1);
    button1.click();

    setTimeout(() => {
      const button2 = document.querySelector("#mainContent > div:nth-child(2) > div > div.q-inlineFlex.qu-alignItems--flex-end.DesktopPopoverMenu___StyledInlineFlex-sc-47js9m-0.hfwRBf > div > div.q-box.qu-zIndex--popover > div > div.q-box.qu-bg--raised.qu-borderRadius--small.qu-borderAll.qu-borderColor--gray.qu-overflow--hidden.qu-boxShadow--large > div > div > div:nth-child(2) > div > div");

      if (button2) {
        console.log('Button2 found:', button2);
        button2.click();
      } else {
        console.log('Button2 not found, retrying...');
        setTimeout(clickElements, 500);
      }
    }, 500);
  } else {
    console.log('Button1 not found, retrying...');
    setTimeout(clickElements, 500);
  }
}

// Use window.onload to ensure the script runs after the entire page is fully loaded
window.onload = function() {
  clickElements();
};

console.log('Script initialized.');
