import React from 'react';

class TreeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  renderTreeNodes(nodes) {
    return nodes.map((node) => (
      <div key={node.id}>
        <div
          className={`tree-node ${node.children.length > 0 ? 'has-children' : ''}`}
          onClick={this.toggleMenu}
        >
          {node.label}
        </div>
        {node.children.length > 0 && this.state.isOpen && (
          <div className="nested">
            {this.renderTreeNodes(node.children)}
          </div>
        )}
      </div>
    ));
  }

  render() {
    const { data } = this.props;

    return (
      <div className="tree-menu">
        {this.renderTreeNodes(data)}
      </div>
    );
  }
}

export default TreeMenu;
