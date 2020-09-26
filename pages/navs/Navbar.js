export default function Navbar(){
  if (typeof window !== 'undefined') {
    document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 54) {
      
        $(".navbar").removeClass('bg-transparent')
        $(".navbar").removeClass('transparent')
         $(".navbar").addClass('navbar-light shadow p-3 mb-5 bg-white rounded')
         $(".navbar").addClass('bg-light')
      }else{
          $(".navbar").removeClass('navbar-light shadow p-3 mb-5 bg-white rounded') 
         $(".navbar").removeClass('bg-light')
         $(".navbar").addClass('bg-transparent') 
         $(".navbar").addClass('transparent') 
         $(".navbar").addClass('navbar-light')
         $(".navbar").addClass('bg-light')

      }
  });
  }
 
  return(
    <div>
    <nav class="navbar bg-transparent navbar-expand-lg navbar-light bg-light fixed-top transparent">
      <div className="container">
      <a class="navbar-brand" href="/">
      <img src="./assets/img/pichain_logo.svg" className="logo"/>
      </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul className="mr-auto"></ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contract">Contract</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/technology">Technology</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/products">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/investors">Investors</a>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    </div>
  );
}
