import React from "react";
import "./application.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Results from "./results/Results";
import Sidebar from "./sidebar/Sidebar";


const results = [
    {
        id: 0, name: 'Johnny', value: `Same the year before. - That's right. We have one more month.
We won't see 'em till next summer.
They're travelling on the money, going where the waves are.
That's right!
The Ex-Presidents rip off banks to finance their endless summer!`
    },
    {id: 1, name: 'Warchild', value: `You stand straight up, you'll just fall over, so let's try it again.`},
    {id: 2, name: 'Bunker', value: `You're dragging your foot, you're gonna be fish food.`},
    {id: 3, name: 'Bodhi', value: `Caught my first tube this morning,... sir!`},
    {id: 4, name: 'Panda', value: `Johnny paddles rapidly, ducks under.
Sees another, bigger wave coming.
Pissed off... at himself, at the downy-cheeked hotshots,
at the frustration, he turns his board around and starts
paddling hard.
He somehow gets the soles of his feet in contact with the
top of the board, then struggles up.  He's standing --
sort of.
Arms pinwheeling, he topples in a nasty crash...
Right in front of a SHAVED-HEAD SURFER on full
afterburner.

Johnny vanishes in an explosion of spray.  His board
SHOOTS OUT.
It SMASHES SIDEWAYS INTO RAZORHEAD.
The guy does an ugly endo.
Utah comes up GASPING for air, arms flailing.
His board, floating a few feet away, tugging at his ankle.
He drapes his torso across the board and pants for breath.
Razorhead, already back on his board, paddles over.
Points to a small dent in the fiberglass.`}
];


class Application extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root column application">
                <Header />
                <div className="flex row">
                    <Sidebar />
                    <Results results={results}/>
                    <div className="flex column">
                        {this.props.children &&
                        React.cloneElement(this.props.children, {results: results})
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Application;
