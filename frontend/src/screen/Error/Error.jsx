import { Link } from 'react-router-dom';

/**
 * It renders an Error page with a link to go back
 * @component
 *
 */
function Error() {
  return (
    <div className="error_page">
      <p className="error_description">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error_return">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
