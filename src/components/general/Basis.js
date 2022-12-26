import PropTypes from 'prop-types';
function Basis(props) {
  const { role, roleAlt, children, pattern } = props;
  return (
    <section className={'full-screen ' + pattern}>
      <div className="card flex-col">
        {/* title */}
        {children[0]}
        <div className="card_body flex flex-col justify-between items-center">
          <div className="flex justify-between items-center px-36 py-12 ">
            <img src={role} alt={roleAlt} className="w-60 h-60" />
            {/* content */}
            {children[1]}
          </div>
          {/* link */}
            {children[2] ? children[2] : ''}</div>
      </div>
    </section>
  );
}

Basis.propTypes = {
  role: PropTypes.string.isRequired,
  roleAlt: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
};

export default Basis;
