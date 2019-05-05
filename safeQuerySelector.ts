function safeQuerySelector(query: string): Element {
  const elem = document.querySelector(query);
  if (elem) {
    return elem;
  }
  return document.createElement("div");
}
