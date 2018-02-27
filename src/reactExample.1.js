export default `
const authors = {'Pepe Mujica': 'El che es un mito', 'Edu Galeano': 'Vivir por vivir', 'Gabo Marquez': 'Te amare ayer'}
const authorsLists = ['Pepe Mujica', 'Edu Galeano', 'Gabo Marquez'];
const styles = {
	container: {
		display: 'flex'
	},
  heading: {
    fontSize: "1.25rem",
    fontWeight: "bold"
	},
	authorBox: {
		margin: 10,
		backgroundColor: 'white'
	}
}

const AuthorsList = ({ authors, onSelect }) => (
  <div style={{ backgroundColor: 'grey', minHeight: 300 }}>
		{
			authors.map(x => <p onClick={()=>(onSelect(x))} style={styles.authorBox}>{x}</p>)
		}
  </div>
)

const AuthorDetail = ({ author, quote='-' }) => (
  <div>
    <h1 style={styles.heading}>
      The author {author} said "{quote}"
		</h1>
  </div>
)

class Parent extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { name: '-' };
		this.select = this.select.bind(this)
	}

	select(name) { this.setState({ name }); }

	render() {
		return (
			<div style={styles.container}>
				<AuthorsList onSelect={this.select} authors={authorsLists}/>
				<AuthorDetail author={this.state.name} quote={authors[this.state.name]} />
			</div>);
	}
}

render(<Parent/>)
`
