(function(window, undefined) {
  var dictionary = {
    "b014f9c2-53a5-45a8-8de3-c87209315be2": "Home Screen@1x",
    "54e49494-84ea-4aab-9374-d4aa5b231ffb": "Detail Screen@1x",
    "8a33eb4c-38b3-43c9-b5a0-f4a6b9b5790e": "Screen 2",
    "f4c236c5-3ce7-487c-9aeb-cf71c2b5d423": "Panic Button@1x (5)",
    "57eff65c-337e-4a72-9358-c210e594b4f6": "Panic Button",
    "49aeddcb-7ebb-4889-b744-391e609dd7ac": "Welcome Screen@1x",
    "a0edbde6-24d1-4e2f-b046-dab9e3e4c47a": "Home",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);