var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert("not yet wired up");
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active">About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active">Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="title-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="search weather by city"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = Nav;