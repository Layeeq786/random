const mainDiv = document.getElementById('div')
const button = document.getElementById('btn')
function dark() {
    document.body.classList.toggle('dark')
    
    if (button.textContent == "Light")
    {
        button.textContent = "Dark"
    }
    else
    {
        button.textContent="Light"
    }
}
    function color(){

        console.log("button clicked")
        const index = Math.round(Math.random()*10000000).toString(16)
        document.body.style.backgroundColor='#'+index
    }
    
    function change (){
        var random= Math.floor(Math.random() * 6) + 0;
        var bigSize = ["url('https://i.pinimg.com/1200x/cc/71/1b/cc711b4ee6377f48c0beed14c96af8bf.jpg')",
                       "url('https://tapemachinesarerolling.files.wordpress.com/2018/04/reignslesnar31.jpg')",
                       "url('https://wallpapers.com/images/featured/car-4k-background-yduvczxgolxxu1nk.jpg')",
                       "url('https://png.pngtree.com/background/20230611/original/pngtree-car-with-flame-wallpaper-picture-image_3120684.jpg')",
                       "url('https://c4.wallpaperflare.com/wallpaper/68/1022/446/night-blue-the-city-smoke-wallpaper-preview.jpg')",
                       "url('https://c4.wallpaperflare.com/wallpaper/1022/45/253/motobike-heavy-1920x1080-bikes-wallpaper-preview.jpg')"];
        document.getElementById("pic").style.backgroundImage=bigSize[random];
      }
    



















    // let pic = ["https://i.pinimg.com/1200x/cc/71/1b/cc711b4ee6377f48c0beed14c96af8bf.jpg","https://tapemachinesarerolling.files.wordpress.com/2018/04/reignslesnar31.jpg","https://wallpapers.com/images/featured/car-4k-background-yduvczxgolxxu1nk.jpg","https://png.pngtree.com/background/20230611/original/pngtree-car-with-flame-wallpaper-picture-image_3120684.jpg","https://c4.wallpaperflare.com/wallpaper/68/1022/446/night-blue-the-city-smoke-wallpaper-preview.jpg","https://c4.wallpaperflare.com/wallpaper/1022/45/253/motobike-heavy-1920x1080-bikes-wallpaper-preview.jpg"]
    //     function change () {
    //         document.getElementById('pic')
    //         // const index = pic[Math.floor(Math.random()*6)
    //         ({'background-image': 'url(pic/' + pic[Math.floor(Math.random() * pic.length)] + ')'});
    //         // document.body.style.backgroundImage=pic[url(randSelect)]
    //     }