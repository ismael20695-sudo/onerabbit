export default function ProjectInfo({
  category,
  year,
  location,
  client,
}: {
  category: string;
  year: string;
  location: string;
  client: string;
}) {

  return (

    <section className="projectInfo">


      <div className="infoItem">

        <span>
          CLIENT
        </span>

        <p>
          {client}
        </p>

      </div>



      <div className="infoItem">

        <span>
          CATEGORY
        </span>

        <p>
          {category}
        </p>

      </div>



      <div className="infoItem">

        <span>
          YEAR
        </span>

        <p>
          {year}
        </p>

      </div>



      <div className="infoItem">

        <span>
          LOCATION
        </span>

        <p>
          {location}
        </p>

      </div>


    </section>

  );

}