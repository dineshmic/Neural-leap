CMS.registerPreviewStyle("/../assets/css/bootstrap.min.css");
CMS.registerPreviewStyle("/../assets/css/blog-style.css");

  var PostPreview = createClass({
    render: function() {
      var entry = this.props.entry;
      var image = entry.getIn(['data', 'image']);
      var bg='';
      if(image){
       bg = this.props.getAsset(image);
      }
       
      
      return h('div', {"className": "section1"},
        h('div', {"className": "container"},
          h('h1', {"className": "blog-page-header"}, entry.getIn(['data', 'title'])),
          h('div', {"className": "row"},
            h('div', {"className": "col-md-2 d-flex mb-2"}, 
              h('button', {"className": "blog-tab-pill"}, entry.getIn(['data', 'category']))
            ),
            h('div', {"className": "col-md-2 d-flex mb-2"}, 
              h('button', {"className": "blog-tab-pill"}, entry.getIn(['data', 'author']))
            ),
            h('div', {"className": "col-md-2 d-flex mb-2"}, 
              h('button', {"className": "blog-tab-pill"}, entry.getIn(['data', 'date']))
            ),
          ),
          h('div', {"className": "mt-5"}, 
            h('img', {src: bg.toString(), "className": "w-100"}),
          ),
          h('div', {"className": "blog-content"}, this.props.widgetFor('body')),
      ));
      
    }
  });

 
      
  CMS.registerPreviewTemplate("blog", PostPreview);