import react,{useState} from 'react'
import './index.css'
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';

const Note=(props)=>{

const deletenote=()=>{
    props.deleteitem(props.id);
}

return (
<>
<div className="">
<h1>{props.title}</h1>
<br />
<p>{props.content}</p>
<button>
<AutoDeleteIcon className="deleteicon" onClick={deletenote}/>
</button>

</div>

</>
)
}
export default Note; 