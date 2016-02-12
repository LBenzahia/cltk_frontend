// App component - represents the whole app
Work = React.createClass({

  propTypes: {
    // This component gets the work to display through a React prop.
    // We can use propTypes to indicate it is required
    work: React.PropTypes.object.isRequired
  },


  render() {

     return (
       <div>
         <section class="page-head image-bg bg-dark">

             <div class="background-image-holder less-blur blur">
               <img src="/images/bronze-characters.jpg" alt="image" />
             </div>
             <div class="background-screen">
             </div>

             <div class="container v-align-transform header-container">
                 <div class="row">

                     <div class="col-sm-12 left">

                       <a href="/">
                         <h3 class="work-author">{this.work.author}</h3>
                       </a>

                       <a href="/">
                         <h2 class="card-title work-title">{this.work.title}</h2>
                       </a>
                       <a href="/">
                         <p class="work-editor">{this.work.editor}, {this.work.year}</p>
                       </a>


                     </div>
                     <div class="col-sm-12 right text-right">

                       <a href="#" class="comments-action md-button md-ink-ripple">
                         <i class="mdi mdi-comment-outline"></i>227
                         <div class="md-ripple-container"></div>
                       </a>

                       <a href="#" class="favorite-action md-button md-ink-ripple">
                         <i class="mdi mdi-star-outline"></i>32
                         <div class="md-ripple-container"></div>
                       </a>

                       <a href="#" class="export-action md-button md-ink-ripple">
                         Export
                         <i class="mdi mdi-export"></i>
                         <div class="md-ripple-container"></div>
                       </a>

                     </div>

                 </div>

             </div>

         </section>

         <section class="work-details">

             <div class="container ">
                 <div class="row">
                   <p>Work description lorem ipsum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                   </p>



                 </div>

             </div>

         </section>

       </div>


      );
    }


});
