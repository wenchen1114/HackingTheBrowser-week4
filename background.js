let aw = new Audio('/sound/aww.mp3');

chrome.tabs.onRemoved.addListener(function(){
    alert('Are you sure?');
    aw.play();

})