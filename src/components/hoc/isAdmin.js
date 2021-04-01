import React from 'react';
import * as roleService from 'services/roles';

export default function isAdmin(Component, shouldRender = true) {
  class AuthAdmin extends React.Component {
    render() {
      const isAdmin = roleService.getRoleStatus();

      return shouldRender ? <Component {...this.props} isAdmin={isAdmin || false} /> : null;
    }
  }

  return AuthAdmin;
}
