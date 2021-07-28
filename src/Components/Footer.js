import classes from './Footer.module.css'
const Footer= () =>{
    return(
        <div>
            <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
      <div class="col-12 col-md">
        <span className={classes.logo}>Zaika</span>
        <small class="d-block mb-3 text-muted">© 2021–2022</small>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><span class="link-secondary text-decoration-none">+91 9987754621</span></li>
          <li class="mb-1"><span class="link-secondary text-decoration-none">Chandani Chowk,Delhi</span></li>
          <li class="mb-1"><span class="link-secondary text-decoration-none">zaika@gmail.com</span></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><span class="link-secondary text-decoration-none">Locations</span></li>
          <li class="mb-1"><span class="link-secondary text-decoration-none">Privacy</span></li>
          <li class="mb-1"><span class="link-secondary text-decoration-none">Terms</span></li>
        </ul>
      </div>
    </div>
  </footer>
        </div>
    )
}

export default Footer;