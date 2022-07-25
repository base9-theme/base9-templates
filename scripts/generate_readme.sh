templates=`ls templates`
temp_file=`mktemp base9.XXX`
for name in $templates; do
  config="templates/$name/config.yml"
  if [ -f $config ]; then
    mustache $config scripts/README.md.mustache > $temp_file
    if [ -s $temp_file ]; then
      cp $temp_file templates/$name/README.md
    fi
  fi
done
rm $temp_file
