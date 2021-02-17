import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import isAdmin from 'components/hoc/isAdmin';
// import DropDown from 'components/common/DropDown';

import { domainList, rolesDomainList } from 'constants/dropdownConstants';
import { filterOrganizationLists } from 'services/exportServices';

class DomainRoleFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      domain: null,
      role: null,
      organization: [],
      roleLists: [],
      organizationLists: []
    };
  }
  setLoading = isLoading => {
    this.setState({ isLoading });
  };
  setDomain = domain => {
    this.setState({ domain }, () => this.props.filteredDomain(domain));
  };
  setOrganization = organization => {
    this.setState({ organization }, () => this.props.filteredOrganizations(organization));
  };
  setRole = role => {
    this.setState({ role }, () => this.props.filteredRoles(role));
  };
  setRoleLists = roleLists => {
    this.setState({ roleLists });
  };
  setOrganizationLists = organizationLists => {
    this.setState({ organizationLists });
  };

  filterOrganizations = async domainId => {
    this.setLoading(true);
    try {
      const response = await filterOrganizationLists(domainId);
      const responseData = (response && response.data) || [];
      const clonedResponseData = responseData.map(el => {
        return {
          ...el,
          value: el.id,
          label: el.name
        };
      });

      this.setOrganizationLists(clonedResponseData);
    } catch (error) {
      this.setOrganizationLists([]);
    }
    this.setLoading(false);
  };

  rolesDomainFilter = domainType => {
    const roleLists = rolesDomainList[domainType];

    this.setRoleLists(roleLists);
  };

  render() {
    const { isLoading, domain, organization, organizationLists, role, roleLists } = this.state;
    const { isTooltipContainer } = this.props;

    return (
      <div>
        <div className="row">
          <div className={isTooltipContainer ? 'col-md-12' : 'col-md-7'}>
            <div className="form-group">
              {/* <DropDown
                label="Select Domain"
                placeholder="Select Domain"
                dropdownOptions={domainList}
                handleChange={selectedValue => {
                  this.setDomain(selectedValue);
                  this.setOrganizationLists([]);
                  this.setOrganization(null);
                  this.setRole(null);
                  this.filterOrganizations(selectedValue.value);
                  this.rolesDomainFilter(selectedValue.value);
                }}
                name="domain"
                isLoading={isLoading}
                value={domain}
              /> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <DropDown
                isMulti={this.props.isOrganizationMulti}
                label="Select Organization"
                placeholder="Select Organization"
                dropdownOptions={organizationLists}
                isLoading={isLoading}
                handleChange={selectedValue => {
                  this.setOrganization(selectedValue);
                }}
                name="organizations"
                value={organization}
              />
            </div>
          </div>
          {this.props.isAdmin && (
            <div className={isTooltipContainer ? 'col-md-12' : 'col-md-7'}>
              <div className="form-group">
                <DropDown
                  label="Select Role"
                  placeholder="Select Role"
                  dropdownOptions={roleLists}
                  handleChange={selectedValue => this.setRole(selectedValue)}
                  name="role"
                  value={role}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
DomainRoleFilter.defaultProps = {
  isOrganizationMulti: true
};

DomainRoleFilter.propTypes = {
  filteredRoles: PropTypes.func,
  filteredDomain: PropTypes.func,
  filteredOrganizations: PropTypes.func,
  isOrganizationMulti: PropTypes.bool,
  isTooltipContainer: PropTypes.bool,
  isAdmin: PropTypes.bool
};

export default isAdmin(DomainRoleFilter);
