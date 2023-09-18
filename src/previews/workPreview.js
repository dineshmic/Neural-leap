CMS.registerPreviewStyle("/../assets/css/bootstrap.min.css");
CMS.registerPreviewStyle("/../assets/css/blog-style.css");

  var WorkPreview = createClass({
    render: function() {
      var entry = this.props.entry;
      var image = entry.getIn(['data', 'image']);
      var bg='';
      if(image){
       bg = this.props.getAsset(image);
      }
       
      
      return h('div', {},
        //=========header============
      h('div', {"className": "position-absolute top-0 w-100 z-index-1"},
        h('div', {"className": "container"},
          h('nav', {"className": "navbar navbar-expand-md navbar-dark"},
            h('div', {"className": "container-fluid"},
              h('a', {"className": "navbar-brand", href:"../../index.html"},
                h('img', {src:"/assets/images/brand-logo.svg"},)
              ),
              h('button', {"className": "navbar-toggler", type:"button", "data-bs-toggle":"collapse", "data-bs-target":"#navbarSupportedContent", "aria-controls":"navbarSupportedContent", "aria-expanded":"false", "aria-label":"Toggle navigation"},
                h('span', {"className": "navbar-toggler-icon"}," ")
              ),
              h('div', {"className": "collapse navbar-collapse ms-md-5", id:"navbarSupportedContent"},
                h('ul', {"className": "navbar-nav me-auto mb-2 mb-md-0"},
                  h('li', {"className": "nav-item"}, h('a', {"className": "nav-link", "href":"../../pricing.html"},"Pricing")),
                  h('li', {"className": "nav-item"}, h('a', {"className": "nav-link", "href":"../../about.html"},"About Us")),
                  h('li', {"className": "nav-item"}, h('a', {"className": "nav-link", "href":"../../mission.html"},"Mission")),
                  h('li', {"className": "nav-item"}, h('a', {"className": "nav-link", "href":"../../why-us.html"},"Why Us")),
                  h('li', {"className": "nav-item"}, h('a', {"className": "nav-link", "href":"../../capabilities.html"},"Capabilities"))
                ),
                h('form', {"className": "d-flex"},
                  h('button', {"className": "btn btn-nav"}, "Get Started")
                )
              )
            )
          )
        )
      ),
        //=========content===========
        h('div', {"className": "section1"},
            h('div', {"className": "container"},
                h('h1', {"className": "work-page-header-1"}, entry.getIn(['data', 'titleLine1'])),
                h('h1', {"className": "work-page-header-2"}, entry.getIn(['data', 'titleLine2'])),
                h('div', {"className": "mt-5 d-flex"},
                    h('div', {"className": "work-tag"}, "1. " + entry.getIn(['data', 'tag1'])),
                    h('div', {"className": "work-tag"}, "2. " + entry.getIn(['data', 'tag2'])),
                    h('div', {"className": "work-tag"}, "3. " + entry.getIn(['data', 'tag3']))
                ),
                h('div', {"className": "project-info"},
                    h('h2', {"className": "work-project"}, "1. " + entry.getIn(['data', 'projectTitle'])),
                    h('h2', {"className": "work-project-developer"}, "1. " + entry.getIn(['data', 'projectDeveloper']))
                ),
                h('div', {"className": "mt-1"},
                h('img', {src: bg.toString(), "className": "w-100"})
                )
            )
        ),
        //=========footer===========
        h('div', {"className": "footer"},
          h('div', {"className": "container"},
            h('div', {"className": "d-flex justify-content-center mb-4"},
              h('a', {"href":"index.html"}, h('img', {src:"/assets/images/logo-footer.svg"}, ))
            ),
            h('div', {"className": "d-flex justify-content-center mb-4"},
              h('a', {"href":"#", "className":"footer-icon"}, h('img', {src:"/assets/images/twitter-icon.svg"}, )),
              h('a', {"href":"#", "className":"footer-icon"}, h('img', {src:"/assets/images/fb-icon.svg"}, )),
              h('a', {"href":"#", "className":"footer-icon"}, h('img', {src:"/assets/images/linkedin-icon.svg"}, ))
            ),
            h('div', {"className": "footer-menu"},
              h('a', {"href":"../../index.html"}, "Home"),
              h('a', {"href":"../../mission.html"}, "Mission"),
              h('a', {"href":"../../pricing.html"}, "Pricing"),
              h('a', {"href":"../../about.html"}, "About Us"),
            )
          )
        )
      );
     
      
      
    }
  });


 
      
  CMS.registerPreviewTemplate("work", WorkPreview);