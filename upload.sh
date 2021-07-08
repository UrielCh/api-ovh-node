for D in packages-*/ kimsufi-*/ soyoustart-*/
do
cd $D
for X in */; do cd $X; npm publish; cd -; done
cd ..
done