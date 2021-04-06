let fouc = () => {
    document.readyState === "interactive" || document.readyState === "complete"
        ? (document.body.style.visibility = "visible")
        : setTimeout(fouc, 100)
}
fouc()
