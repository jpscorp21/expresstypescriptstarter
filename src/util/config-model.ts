const ConfigModel = (tableName: any) => {
  return {
    schema: 'gestion',
    paranoid: true,
    underscored: true,
    createdAt: 'fecha_creacion',
    updatedAt: 'fecha_modificacion',
    deletedAt: 'fecha_eliminacion',
    tableName,
  };
};

export default ConfigModel;
