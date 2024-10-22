import { EmployeeChangeLogProps } from '../types';

export default function EmployeeChangeLog({
  sensitive = false
}: EmployeeChangeLogProps) {
  return (
    <div>
      <h1>Employee Change Log {sensitive ? 'Sensitive' : ''}</h1>
    </div>
  );
}
