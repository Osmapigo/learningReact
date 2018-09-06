const Card = (props) => {
    return (
        <div>
          <img width="75" src= {props.avatar_url} />
          <div style={{display: 'inline-block', marginLeft: 10}}>
            <div style= {{fontSize: '1.5em', fontWeight: 'Bold'}}>{props.name}</div>
            <div>{props.company}</div>
          </div>
        </div>
    )
}
let data = [
	{
  	name: "Oscar",
    avatar_url: "https://avatars0.githubusercontent.com/u/12476339?v=4",
    company: "Clickdelivery"
  },
  {
  	name: "jcbwlkr",
    avatar_url: "https://avatars1.githubusercontent.com/u/2027263?v=4",
    company: "gitlabs"
  },

]
const CardList = (props) => {
	return (
  	<div>
    	{props.cards.map(card => <Card {...card}/>)}
    </div>
  )
}

ReactDOM.render(<CardList cards = {data}/>, mountNode)