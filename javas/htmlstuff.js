var blurbs = ["Power to the people...", "mexicanghëy", "krabbanomalous was here", "teehee", "ily", "Loading...", "look away if you don't like purple", "blerg seet", "some of these blurbs will only be understood by approximately one person in this world besides krabbanomlaous"]
const the_blurb = document.getElementById("blurb")

the_blurb.innerHTML = blurbs[Math.floor(Math.random() * blurbs.length)]