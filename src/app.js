
class HelloMessage extends React.Component {
    render() {
        return <div>Hello my name is {this.props.name}</div>;
    }
}

ReactDOM.render(<HelloMessage name="Jason" />, document.getElementById('app'));
