import { ReactNode } from "react";

interface TablesProps {
  thProps: any;
  dataProps: ReactNode;
}
export default function Tables({ thProps = [], dataProps = [] }: TablesProps) {    
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {thProps.map((_th: any , index:any) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                      key={index}
                    >
                      {_th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {dataProps}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
