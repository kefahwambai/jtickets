import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    {/* <div class="address">
                        <h4>Sunny Hill Festival Address</h4>
                        <span>5 College St NW, <br/>Norcross, GA 30071<br/>United States</span>
                    </div> */}
                </div>
                <div class="col-lg-4">
                    <div class="links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Info</a></li>
                            <li><a href="#">Venues</a></li>
                            <li><a href="#">Guides</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                </div>
                <div class="col-lg-12">
                    <div class="under-footer">
                        <div class="row">
                            <div class="col-lg-6">
                                <p class="copyright">Copyright 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="sub-footer">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="logo"><span>J<em>Tickets</em></span></div>
                            </div>
                            <div class="col-lg-3">
                                <div class="social-links">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

  )
}
