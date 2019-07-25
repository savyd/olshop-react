import React from "react";

const Table = ({ heads, foots, bodys, remove, id }) => {
  const Action = () => {
    return (
      <td>
        <button className="button is-danger" onClick={() => remove(id)}>
          Delete
        </button>
      </td>
    );
  };

  
  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          {heads.map(head => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tfoot>
        <tr>
          {foots.map(foot => (
            <th>{foot}</th>
          ))}
        </tr>
      </tfoot>
      <tbody>
        // mungkin bentuknya array -> array -> array -> array
        {bodys.map(body => (
          <tr>
            {body.map(bod => (
              <td>{bod.isi}</td>
            ))}
            <Action />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
