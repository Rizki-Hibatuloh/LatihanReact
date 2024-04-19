function Article (props){
     return (
          <div>
               <h3> {props.title}</h3>
               <small>Date : {props.date} Tags : {props.tags.join(",")} </small>
          </div>
     )
}
export default Article;