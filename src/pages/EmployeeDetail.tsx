import { EmployeeChangeLogProps } from '../types';

export default function EmployeeDetail({
  sensitive = false
}: EmployeeChangeLogProps) {
  return (
    <div>
      <h1>Employee Detail {sensitive ? 'Sensitive' : ''}</h1>
    </div>
  );
}
