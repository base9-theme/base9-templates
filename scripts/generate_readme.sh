templates=`ls templates`
for name in $templates; do
  config="templates/$name/config.yml"
  if [ -f $config ]; then
    mustache $config scripts/README.md.mustache > templates/$name/README.md
  fi
done
