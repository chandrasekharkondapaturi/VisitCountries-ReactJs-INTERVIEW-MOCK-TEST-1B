import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, deleteVisitCountry} = props
  const {name, imageUrl, id} = visitedCountryDetails

  const remove = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="visited-countries-list-item">
      <div className="visited-countries-container">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <div className="details-section">
          <p className="visited-country-title">{name}</p>
          <button
            className="delete-button"
            type="button"
            onClick={remove}
            // eslint-disable-next-line react/no-unknown-property
            testid="delete"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
