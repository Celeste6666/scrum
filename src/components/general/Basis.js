import PropTypes from 'prop-types';
import Sidebar from '@/components/general/Sidebar';
function Basis(props) {
  const { role, role2, roleAlt, children, pattern } = props;
  return (
    <section className={'card flex-col relative ' + pattern}>
      {/* title */}
      {children[0]}
      <div className="card_body flex flex-col justify-between items-center">
        <div className="flex justify-between items-center px-36 py-8 ">
          <div className="flex flex-col justify-center items-center">
            <img src={role} alt={roleAlt} className="w-44 " />
            {role2 ? <img src={role2} alt={roleAlt} className="w-36" /> : <></>}
          </div>
          {/* content */}
          {children[1]}
        </div>
        {/* link */}
        {children[2] ? children[2] : ''}
      </div>
      <Sidebar />
    </section>
  );
}

Basis.propTypes = {
  role: PropTypes.string.isRequired,
  roleAlt: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
};

export default Basis;
