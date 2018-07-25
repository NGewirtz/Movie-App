export function makeAjaxRequest(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(parseRequest(request));
        } else {
          reject(request.status);
        }
      }
    };
    request.send();
  });
}

export function handleAddToFavorites(movie) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('POST', "/favorites");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve();
        } else {
          reject(request.status);
        }
      }
    };
    request.send(JSON.stringify(movie));
  });
}

function parseRequest(request) {
  if(request.responseURL.includes("omdbapi")) {
    return JSON.parse(request.responseText).Search;
  }else {
    return JSON.parse(request.responseText);
  }
}
