import React from "react";


const DataTable = ({ headers, data, actions = [] }) => (
  <div className="table-responsive">
    <table className="table table-hover">
      <thead className="table-primary">
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          {actions.length > 0 && <th>الإجراءات</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
            {actions.length > 0 && (
              <td>
                <div className="btn-group" role="group">
                  {actions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      className={`btn btn-${action.variant || 'outline-primary'} btn-sm`}
                      onClick={() => action.onClick(rowIndex)}
                      title={action.title}
                    >
                      {action.icon}
                    </button>
                  ))}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;