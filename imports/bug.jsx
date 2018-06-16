import React, { Component } from 'react'; 
import { withTracker } from 'meteor/react-meteor-data';

class _ListContainer extends Component {

  render() {
    const {items, schema, groupContainer, collection, transformItem, ...props} = this.props;
    return React.createElement(
      groupContainer,
      _.extend(
        {
          items: transformItem ? _.map((items || []), transformItem) : (items || []),
          schema
        },
        props,
      ),
    );
  }
}

export default (ListContainer = withTracker((props) => {
  const { prefix, query = {}, params = {}, schema, forceLoading } = props;

  if (props.prefix == 'products'){
      //problem in the next line
      const directoriesHandle = Meteor.subscribe('directories', {}, {});
    }
})( _ListContainer));

