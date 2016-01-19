import React, {Component} from 'react';
import {markdown} from 'markdown';

const RP = React.PropTypes;

/**
 * Trip: (Title, [Text | Day])
 * Day: [Location | Route]
 * Location: ( TBD )
 * Route: ( TBD, (Location, Location))
 */

const getId = function() {
  return Math.random();
};

const makeText = function() {
  return {
    type: "Text",
    id: getId(),
    content: "Here is some content"
  }
};

class ViewText extends Component {
  static propTypes = {
    id: RP.number.isRequired,
    content: RP.string.isRequired,
    setEditedId: RP.func.isRequired,
  };

  render() {
    const {id, content, setEditedId} = this.props;

    return (
      <div onClick={() => setEditedId(id)}
        dangerouslySetInnerHTML={{__html: markdown.toHTML(content)}} />
    );
  }
}

class EditText extends Component {
  static propTypes = {
    id: RP.number.isRequired,
    content: RP.string.isRequired,
    setContent: RP.func.isRequired,
  }

  componentDidMount() {
    React.findDOMNode(this.refs.text).focus();
  }

  render() {
    const {id, content, setContent} = this.props;

    return (
      <textarea ref="text"
       value={content}
       onChange={ev => setContent(id, ev.target.value)} />
    );
  }
}

const TypeToComponent = {
  Text: [ViewText, EditText]
}

export default class CreateTrip extends Component {
  state = {
    trip: {
      title: "Hello",
      items: [makeText(), makeText()]
    },
    editedId: null
  }

  renderItem(item) {
    const {editedId} = this.state;

    const ComponentClass = TypeToComponent[item.type][item.id === editedId ? 1 : 0];

    return (
      <ComponentClass
        key={item.id}
        setEditedId={this.setEditedId}
        setContent={this.setContent}
        {...item} />
    );
  }

  render() {
    const {trip} = this.state;

    return <div>
      <h1>{trip.title}</h1>
      {trip.items.map(item => this.renderItem(item))}
     </div>;
  }

  setEditedId = (id) => {
    this.setState({editedId: id});
  }

  setContent = (id, content) => {
    const {trip} = this.state;

    const state = {
      trip: {
        ...trip,
        items: trip.items.map(item => ({
          ...item,
          content: item.id === id ? content : item.content
        }))
      }
    };
    console.log(state);
    this.setState(state);
  }
}
