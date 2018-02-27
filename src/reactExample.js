export default `
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

const AuthorsList = ({ authors }) => (
  <div style={{ backgroundColor: 'grey', minHeight: 300 }}>
		{
			authors.map(x => <p style={styles.authorBox}>{x}</p>)
		}
  </div>
)

const AuthorDetail = ({ author }) => (
  <div>
    <h1 style={styles.heading}>
      The author {author.name} said "{author.quote}"
		</h1>
  </div>
)

render(
	<div style={styles.container}>
		<AuthorsList authors={['Pepe Mujica', 'Edu Galeano', 'Gabo Marquez']}/>
		<AuthorDetail author={{name: 'Edu Galeano', quote:'Work to live!' }} />
	</div>
)
`
